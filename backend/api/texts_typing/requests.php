<?php

    // constants ============================================= //
    $TEXTS_TYPING_QUERIES_BODIES = [
        "GET" => function ($id) {
            return "SELECT text FROM textstyping WHERE id={$id} LIMIT 1;";
        },
    ];

    // export ================================================ //
    return $TEXTS_TYPING_QUERIES_BODIES;

?>