<?php

    // constants ============================================= //
    class LinkNode {

        public $current;
        public $next;

        function __construct($value) {
            $this->current = $value;
            $this->next = null;
        }

    }

    // This is mini full functional for the link list
    // class LinkList {

    //     public $firstNode;
    //     public $lastNode;

    //     function __construct() {
    //         $this->firstNode = null;
    //         $this->lastNode = null;
    //     }

    //     function unshift($value) {
    //         $node = new ListNode($value);
    //         $prevFirstNode = $this->firstNode;
    //         $this->firstNode = $node;
    //         $this->firstNode->next = $prevFirstNode;
    //     }

    //     function push($value) {
    //         $node = new ListNode($value);
    //         if ($this->firstNode == null) {
    //             $this->firstNode = $node;
    //             $this->lastNode = $this->firstNode;
    //         } else {
    //             $this->lastNode->next = $node;
    //             $this->lastNode = $this->lastNode->next;
    //         }
    //     }

    // }

?>