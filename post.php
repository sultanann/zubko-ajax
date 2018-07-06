<?php
include "fns.php";
if (empty($_POST['artName'] || $_POST['text'])) exit("Vvedite statiu");
insertArt($_POST['artName'], $_POST['text']);
$articles = getAllItems();
foreach ($articles as $article):
    ?>
    <div class="art">
        <h2><?=$article['artName']?></h2>
        <p><?=$article['text']?></p>
    </div>
<?php endforeach;
?>
