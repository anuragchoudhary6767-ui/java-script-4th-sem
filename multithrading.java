// class mythread implements Runnable{
//     public void run(){
//         for(int i=0;i<5;i++){
//        System.out.println("hello");
//        try{
//            Thread.sleep(2000);
//     }catch(Exception e){
//         System.out.println(e);
//     }
//     }
// }
// }

// class Main{
// public class multithrading {
//     mythread task=new mythread();
//     Thread t1=new Thread(task);
//     Thread t2=new Thread(task);
//     t1.start();
//     t2.start();
//  }
// }




//     public void run(){
//         for(int i=0;i<5;i++){
//             System.out.println("hello");
//         }try{
//             Thread.sleep(2000);
//     }catch(Exception e){
//         System.out.println(e);
//     }
//     }
// }

// class main{
// public class multithrading {
//     mythread task=new mythread();
//     Thread t1=new Thread(task);
//     Thread t2=new Thread(task);
//     t1.start();
//     t2.start();
//  }
// }



// import java.lang.reflect.Array;
// import java.util.;

// class Main {
    
//     public static void main(String[]args){
//         ArrayList<Integer> list=new ArrayList<>();
//         list.add(5);
//         list.add(6);
//         list.add(7);
//         List<Integer>result=List.stream().filter(n->n>60).toList();
//         List<Integer>mapResult=List.stream().map(n->n*2).toList();
//         int(data)=list.stream()result.reduce(0,(a,b)->a+b);

//         System.out.println=(data);
//     }
// }

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
class Main{
    public static void main(String[]args){
        System.out.println();
        ArrayList<Integer>list=new ArrayList<>();
        list.add(5);
        list.add(6);
        list.add(7);
        List<Integer>res= list.stream().filter(n->n>6).toList();
        List<Integer>result=list.stream().map(n->n*2).toList();
        int data=list.stream().reduce(0,(a,b)->a+b);

        System.out.println(result);

    }
}