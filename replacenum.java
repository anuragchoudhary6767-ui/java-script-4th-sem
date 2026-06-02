public class replacenum {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int key = 5;
        int replacement = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                arr[i] = replacement;
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

}
