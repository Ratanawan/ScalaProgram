object ListName{
    def main(args: Array[String]){
        var name = List[String]("Alexa", "Aloha", "Adam", "Bob", "Brandie", "Chile");
        // println(name(0).charAt(0));

        for(i <- 0 to (name.length-1)){
            if((name(i).charAt(0) == 'A') || (name(i).charAt(0)) == 'a'){
                println(name(i));
            }
        }

    }
}