class Twitter {
    constructor() {
        this.tweets = [];
        this.followers = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.unshift({ userId, tweetId });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        return this.tweets
            .filter((tweet) => tweet.userId === userId
            || (this.followers[userId] ?? []).includes(tweet.userId))
            .map((tweet) => tweet.tweetId)
            .slice(0, 10);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followers[followerId]) this.followers[followerId] = [];
        this.followers[followerId].push(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.followers[followerId] = this.followers[followerId].filter((id) => id !== followeeId);
    }
}
