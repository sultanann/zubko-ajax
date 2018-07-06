<?php
function getConnection(){
    static $pdo=null;
    if($pdo!=null) return $pdo;
    $pdo = new PDO(
        "mysql:host=localhost;dbname=articles; charset=utf8",
        "root",
        "",
        [PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC
        ]
    );
    return $pdo;
}
function getAllItems(){
    $pdo=getConnection();
    $articles=$pdo->query("select*from `articles`;");
    return $articles->fetchAll();
}
function insertArt($artName, $text){
    $pdo=getConnection();
    $artName = $pdo->quote($artName);
    $text = $pdo->quote($text);
    $pdo->exec("INSERT INTO`articles`(`artName`,`text`)  VALUES($artName, $text)");
}