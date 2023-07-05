<?php

    // constants ============================================= //
    $DATA_BASE_INFO = (object) [
        "host" => "localhost",
        "data_base_name" => "Lichagin",
        "charset" => "utf8",
    ];
    $USER_DATA_BASE_INFO = (object) [
        "name" => "root",
        "password" => "root",
    ];
    $ARGS_PDO = [
        "mysql:host=$DATA_BASE_INFO->host;".
        "dbname=$DATA_BASE_INFO->data_base_name;".
        "charset=$DATA_BASE_INFO->charset;",

        $USER_DATA_BASE_INFO->name,
        $USER_DATA_BASE_INFO->password
    ];

    // export ================================================ //
    $DBH = new PDO(...$ARGS_PDO);
    return $DBH;

?>