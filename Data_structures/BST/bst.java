public class BST {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
        int val = 80;
        System.out.println(bst_fun2(arr, val));

    }

    public static int bst_fun2(int[] arr, int val) {
        //1. First get the low, high, and midpoint of the array, all of these values will be dynamic i.e changing with each iteration.
        int low = 0;
        int high = arr.length - 1;
        // 2. Run the loop until low is lesser than equal to high
        while (low <= high) {
            // Mid will keep on changing on each iteration
            int mid = (low + high) / 2;
            // 3. Check if the given value is equal to mid, if yes then return the mid
            if (val == arr[mid]) {
                return mid;
                // 4. Check if the given value is higher than mid, if yes then set the lower bound to (mid +1)
            } else if (val > arr[mid]) {
                low = mid + 1;
                // 5. Check if the given value is lesser than mid, if yes then set the higher bound to (mid -1)
            } else {
                high = mid - 1;
            }

        }
        // 6 In the end return -1 after all conditions because if the value doesn't exist in an array
        return -1;
    }
}
