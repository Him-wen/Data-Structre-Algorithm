var removeNthFromEnd = function(head, n) {
    let p = new ListNode(-1);
    p.next=head;
    let fast = p;
    let slow = p;

    while(n--){
        fast=fast.next;
    }
    while(fast && fast.next){
        fast=fast.next;
        slow=slow.next;
    }
        slow.next=slow.next.next;
        return  p.next;   
};
