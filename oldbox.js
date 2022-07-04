/* function oldbox(x, y, w) {
    this.x = x != null ? x : 0;
    this.y = y != null ? x : 0;
    this.width = w != null ? w : 50;


    function contains(x, y) {
        if (
            x >= this.x &&
            x <= this.x + this.width &&
            y >= this.y
        )
        return true;
        else return false;
    };
    function intersects(hitbox) {
        if (
            this.contains(hitbox.x, hitbox.y) ||
            this.contains(hitbox.x + hitbox.width, hitbox.y)
        )
        return true;
        else if (
            hitbox.contains(this.x + this.y) ||
            hitbox.contains(this.x + this.width, this.y)
        )
        return true;

    return false;
    };

    function updateHitboxPosition(x, y) {
        this.x = x != null ? x : 0;
        this.y = y != null ? x : 0;
    }
} */