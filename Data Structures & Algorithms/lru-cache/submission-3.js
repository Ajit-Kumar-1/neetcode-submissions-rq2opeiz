class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = [];
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let res = null;
        for (let i in this.cache) {
            if (res) return res?.value;
            const item = this.cache[i];
            if (item.key !== key) continue;
            res = item;
            this.cache.splice(i, 1);
            this.cache.unshift(item);
        }
        return res?.value ?? -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let found = false;
        let i = 0;
        while (!found && i < this.cache.length) {
            if (this.cache[i].key === key) {
                found = true;
                this.cache[i].value = value;
                const item = this.cache[i];
                this.cache.splice(i, 1);
                this.cache.unshift(item);
            } else i++;
        }
        if (found) return;
        this.cache.unshift({ key, value });
        if (this.cache.length > this.capacity) this.cache.pop();
    }
}
