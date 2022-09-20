class DrawableObject {
    x = 120;
    y = 190;
    img;
    height = 250;
    width = 150;
    imageCache = {};

    /**
     * The function loads a picture depending on its path.
     * @param {string} path Folder where the image is located.
     */

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    /**
 * The function loads images depending on its path.
 * @param {array} arr Array with the relative path of images.
 */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * The function draws a rectangle around the character at a  certain position and moves with the character.
     * @param {*} ctx 
     */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 25, this.y + 190, this.width - 65, this.height - 200)
            ctx.stroke();
        }
    }




    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
    }
}