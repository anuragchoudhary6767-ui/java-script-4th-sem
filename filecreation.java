 
    



// import java.io.*;

// public class filecreation {
//     public static void main(String[] args) {
//         File file = new File("try.py");//code file banane ke liaa is code ka use hota hai
//         try {
//             if(file.createNewFile()){//createnewfile() se hi file create hoti hai
//                 System.out.println("file crreated ");
//             }else{
//                 System.out.println("file already created ");
//                 System.out.println(file.getPath());
//             }
//         } catch (Exception e) {
            
//             System.out.println(e);
//         }
//     }
   


// }






import java.io.FileWriter;

public class filecreation {
    
    static void writedata(String data) {
        try {
            FileWriter writer = new FileWriter("New.txt");
            writer.write(data);
            writer.close();
            
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}





// import java.io.FileReader;

// public class file {
// static void FileRead(){
//     try{
//         FileReader reader=new FileReader("New.txt");
//         int ch;
//         while((ch=reader.read())!=-1){
//             System.out.print((char)ch);
//         }
//         // reader.close();
//     }catch(Exception e){
//         System.out.println(e);
//     }
// }
// };



// import java.io.File;

// // class hello{
// static void FileDelete(){
//     try{
//         File file=new File("New.txt");
//         if(file.delete()){
//             System.out.println("file.delettt ");
//         }else{
//             System.out.println("nooo");
//         }
//     }catch(Exception e){
//         System.out.println(e);
//     }
// }
// // }

    