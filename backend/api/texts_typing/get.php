<?php
    // includes ============================================== //
    $DATA_BASE_HANDLER = include "../../modules/DBH.php";
    $TEXTS_TYPING_QUERIES_BODIES = include "./requests.php";

    // constants ============================================= //

    // response for browser ---------------------------------- //
    $ACTIONS = (object) [
        "GET" => (object) [
            "header" => "Content-Type: application/json",
            "data" => null,
        ],
    ];

    // queries ----------------------------------------------- //
    $QUERIES = (object) [
        "GET" => $DATA_BASE_HANDLER->prepare(
            $TEXTS_TYPING_QUERIES_BODIES["GET"](rand(4, 4))
        )
    ];

    // main ================================================== //
    $QUERIES->GET->execute();
    $ACTIONS->GET->data = $QUERIES->GET->fetch(
        $DATA_BASE_HANDLER::FETCH_NAMED
    )["text"];
    
    // response from the server
    header($ACTIONS->GET->header);
    echo json_encode($ACTIONS->GET->data);

?>