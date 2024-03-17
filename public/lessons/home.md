---
title: "home page"
--- 

<style>
    .underlined {
        color: blue; 
        text-decoration: none;
        position: relative;
        padding: 2px 2px;
        transition: all .2s ease-out
    }

    .underlined:after {
        content: " ";
        width: 100%;
        height: 1px;
        background: blue;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: all .2s ease-out
    }

    .underlined:before {
        content: " ";
        width: 4px;
        height: 4px;
        background: blue;
        position: absolute;
        right: -4px;
        bottom: 0;
        opacity: 0
    }

    .underlined:hover {
        background: #bbdaf0;
        transition: all .1s ease-out;
        padding: 2px 8px;
    }
    .underlined:hover:after {
        width: 0px;
        transition: all .1s ease-out
    }
    .underlined:hover:before {
        opacity: 1;
        animation: blink .4s infinite .1s;
        transition: all .1s ease-out
    }

    @keyframes blink {
        0% { 
            opacity: 1 
        }
        50% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
            
    }
 
</style>

Form 2: 
<a class="underlined" href="/mathematics/form-2/simple-probability">Chapter 13: Simple Probability</a>