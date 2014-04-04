$(function(){
    var time;
    db = openDatabase('tweetdb', '1.0', 'All my tweets', 2 * 1024 * 1024);

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(iduser, nameuser, img) INNER JOIN tweets ON users.iduser=tweets.user;', [],getUsers);
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)', [], getTweetsFirst);

    });
    var getUsers = function () {
        $.ajax({
            url: 'users.json',
            type : 'GET',
            dataType : 'json',
            success: function(data,textStatus, jqXHR) {
                $.each(data, function(idx,user) {
                    db.transaction(function (tx) {
                        tx.executeSql('INSERT INTO users (iduser, nameuser, img) VALUES (?, ?, ?)',
                        [user.iduser, user.nameuser, user.img]);
                    });
                });
            }
       });

    };
    var getTweetsFirst = function () {

        var tweets = $.ajax({
            url: 'tweets.json',
            type : 'GET',
            dataType : 'json',
            success: function(data,textStatus, jqXHR) {
                $.each(data, function(idx,tweet) {
                    addTweet(tweet);
                });
            }
        });


    };

    var getTweets = function(){

    }

    $(document).on('click','#ver',function(){
        var tweetEl = document.getElementById('contain');
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM tweets', [],
            function(tx, results) {
                var html = [], len = results.rows.length;
                for (var i = 0; i < len; i++) {
                    html.push('<li>' + results.rows.item(i).text + '</li>');
                }

                tweetEl.innerHTML = html.join('');
            });
        });
    });

    $(document).on('click','#borrar',function(){
        removeTweet($('#codigo').get(0).value);
    });

    $(document).on('click','#anadir',function(){
        var newTweet = {
                        "id" : "00001",
                        "from_user" : "01",
                        "date" : (new Date).getTime(),
                        "text" : $('#tweetText').get(0).value
                        };
        addTweet(newTweet);
    });


    var addTweet = function(tweet){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM users where iduser = ?', [tweet.from_user],
            function(tx, results) {
                if(results.rows.length==0){
                    tx.executeSql('INSERT INTO users (iduser) VALUES (?)',
                        [tweet.from_user]);

                }
                tx.executeSql('SELECT * FROM tweets where id = ?', [tweet.id],
                function(tx, results) {
                    if(results.rows.length==0){
                    tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                            [tweet.id, tweet.from_user, tweet.date, tweet.text]);
                    }
                    else{
                        updateTweet(tweet);
                    }
                });
            });

        });
    };

    var removeTweet = function(idtweet){
        db.transaction(function (tx) {
            tx.executeSql('delete FROM tweets where id = ?', [idtweet]);

        });
    };

    var updateTweet = function(tweet){
        db.transaction(function (tx) {
            tx.executeSql('UPDATE tweets SET text=?, date=? where id=?',
                            [tweet.text,tweet.date,tweet.id]);
        });
    };


});