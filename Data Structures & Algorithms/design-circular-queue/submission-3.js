class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.k = k;
        this.q = []; // new Array(k).fill(null);
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.q.length === this.k) return false;
        this.q.push(value);
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.q.length === 0) return false;
        this.q.shift();
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.q.length === 0) return -1;
        return this.q[0];
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.q.length === 0) return -1;
        return this.q[this.q.length - 1];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.q.length === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.q.length === this.k;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
