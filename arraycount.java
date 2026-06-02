public class arraycount {

    static int count(int[]arr,int i,int key)
    {
        if(i==arr.length)return 0;
        if(arr[i]==key)return 1+count(arr,i+1,key);
        
        return count(arr,i+1,key);
    }
    public static void main(String[] args){
        int[]arr={1,2,2,2,2,3,4,5,6,7};
        int key =2;
        int i=0;
        System.out.println(count(arr,i,key));
    }
    
}
