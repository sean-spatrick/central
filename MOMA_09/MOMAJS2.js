function ImageNode( image) {
    var Timage = image;
    ImageNode nextN;
    ImageNode prevN ;
    getNext(){
        return nextN;
    }
    getPrev(){
        return prevN;
    } 
    setPrev(ImageNode imgNew){
        this.prevN = imgNew;
    }
    setNext(ImageNode imgNew){
        this.nexN = imgNew;
    }
    getImage(){
        return Timage;
    }
    }
function ImageList(){
    var length = 0;
    ImageNode _head;
    ImageNode _tail;
    ImageNode _cursor;
   
    setHead(image){
        this._head = image;
    }
    
    setTail(image){
        this._tail = image;
    }
    
    add (image){
        ImageNode A = new ImageNode(image);
        if(length == 0){
            this._head = A;
            this._tail = A;
            this._cursor = A;
        }else{
        this._cursor = A;
        _tail.setNext(A);    
        A.setPrev(_tail);
        setCursor(_tail);   
        }
    }
}

var Gallery = new ImageList;

Gallery.add(<image src= >)
