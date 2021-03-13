var reverseList = function(head) {
    if(!head || !head.next)return head;
    let p = reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return p;
};
