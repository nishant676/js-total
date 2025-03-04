/*
    (#) Fetch:-
        =>it return a promise which is fulfilled once the response is avail.
        => return promise means give either resolve or reject
        => if request promise and u got 404 error code then were did it come
            |-> it came fromresponse .it will not in resolve or reject 
            |-> we get error in case where it did not fulfill request then only error happen.

*/