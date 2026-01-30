const fs = require("node:fs");
// start prefixing requires with a colon, node:fs, node:process

const file = fs.readFileSync("analytics.txt", "utf-8");
/* 

by default, unless you ask to output with strings, it won't give it -- it is technically a container of bytes
ascii uses 7 bits in a 1 byte to represent some default chars/nums
8th bit used for code page - uses your system locale (decides how your dates look) to interpret code page (NA has latin 1)
javascript .toString() consults OS default locale and encodes based on that (NA computer, will be Latin-1) - this can crash DBs if we still use ascii
therefore, we need to use utf-8!

*/

/*

your code runs top to bottom - if a fn needs 4 mins, it'll be on that line for 4 mins
every time you run a program, it will on default run on one cpu
    when you start a program, OS will get your CPU to reserve a spot in memory for it to run - thread
    you only have 1 thread - when the thread is blocked, nothing else can run

    traditionally, you can use multithreading, which offloads slow tasks to another cpu

    however, this is easy to mess up - need to write thread-safe code, especially if you need to share data across threads
    your OS allocates memory for a thread - NOT SCALABLE
    default for Java, Flask, Ruby, PHP
        they use a model called thread per request
        a cpu will spin up another thread on itself, but it is not parallel - it goes in between each thread and also use memory -> VERY ESPECIALLY not feasable
        
        node.js solution - what if you use 1 thread for every user - what if you never spin up another thread
        syscalls allow you to hook into kernel and do low level things

        epoll - every fn you write is either a function that does a CPU-related task, or a function doing an IO-related task
            cpu-tasks = number crunching (video/image processing, ML)

            IO = input/output things that are outside of your CPU (read/write to disk, communicate with DB)

            most web-apps are I/O based

            modern OS do not need to use CPU to read from storage
            DMA - take data from storage and buffer into RAM without CPU help
                there must be some type of way to buffer data from servers without CPUs - this means we don't need more threads!
                this means when our programming languages are blocking threads when reading from a file, our CPU is actually idle 
            
            node.js exposes asynchronous functions - readFile("...") will return integers, FD (file descriptor)
            when you call const d = fs.readFile("...")
                a FD will be assigned to d
                node.js makes a syscall to epoll
                epoll receives the FD
                epoll will now watch over hard drive reading to file, freeing up CPU thread
                once file is done being read, epoll needs to be able to notify/*callback* to say the contents of the file
            
                epoll needs the FD and a callback function!

                with epoll
                const d = fs.readFile("test.txt", "utf8", (callback) => {
                    ....
                    });

                every callback needs to check for err (err, d)
                    checks for error, if not then do d

                anytime you have an operation that may be slow, can expose a special async fn to put it to the back while allowing us to continue the main function
                this allows scheduling for our single thread



*/

console.log(file);
