import java.util.*;

public class MinimumNotesPayment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Input the size of currency denominations
        System.out.println("Enter the size of currency denominations:");
        int denominationSize = scanner.nextInt();
        
        // Input the currency denominations value
        System.out.println("Enter the currency denominations value:");
        int[] denominations = new int[denominationSize];
        for (int i = 0; i < denominationSize; i++) {
            denominations[i] = scanner.nextInt();
        }
        
        //Sort the array 
        Arrays.sort(denominations);
        
        // Input the amount you want to pay
        System.out.println("Enter the amount you want to pay:");
        int amountToPay = scanner.nextInt();
        
        // List to store the payment approach
        List<int[]> paymentApproach = new ArrayList<>();
        
        // Calculate the payment approach
        for (int i = denominationSize - 1; i >= 0; i--) {
            int denomination = denominations[i];
            int count = 0;
            while (amountToPay >= denomination) {
                amountToPay -= denomination;
                count++;
            }
            if (count > 0) {
                paymentApproach.add(new int[]{denomination, count});
            }
        }
        
        // Sort the payment approach in descending order of denominations
        paymentApproach.sort((a, b) -> b[0] - a[0]);
        
        // Print the payment approach
        System.out.println("Your payment approach in order to give min no of notes will be");
        for (int[] entry : paymentApproach) {
            System.out.println(entry[0] + ":" + entry[1]);
        }
        
        scanner.close();
    }
}
