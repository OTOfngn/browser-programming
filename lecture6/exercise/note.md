A.  NOTE:
    1.
    Start
    End
    Timeout finished after 2 seconds

    2.
    Waiting (Promise)...
    Waiting (Await)...
    Loading from API...

B.  The waiting time period shortened to 0.5 second.
    No.
    Because the it is asynchronous, and the "end" output is not affected by the waiting time period.

C.  No, it didn't.
    The function runs 2 seconds after the "Waiting (Promise)..." output.
    It prints out "Promise resolved after 2 seconds!".

D.  Order: Before await, After await, Promise resolved after 2 seconds!
    Await function pauses the execution of the function until the Promise resolves.

E.  Error: HTTP Error: 404
    Because the item may not exist or have other problems.

F.  1.
    Async/await functions realize the waiting process. Therefore, API usage
    is available.
    2.
    Because fetching data from the internet may not succeed. We need to handle the error.
    3.
    response.ok checks if the HTTP status is good. Otherwise, it throws an error.
