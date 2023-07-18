<?php

    // constants ============================================= //
    $DATA_PATH = "./data/texts.json";

    // main ================================================== //
    $array = json_decode(file_get_contents($DATA_PATH));
    $length_array = count($array);
    $random_text = $array[rand(0, $length_array - 1)];

    header("Content-Type: application/json");
    echo json_encode([$random_text]);

?>