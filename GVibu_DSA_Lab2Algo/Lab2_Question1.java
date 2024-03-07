import java.util.Scanner;

public class PayMoneyTargetAchievement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Input the size of the transaction array
        System.out.println("Enter the size of transaction array:");
        int transactionSize = scanner.nextInt();
        
        // Input the values of the array
        System.out.println("Enter the values of array:");
        int[] transactions = new int[transactionSize];
        for (int i = 0; i < transactionSize; i++) {
            transactions[i] = scanner.nextInt();
        }
        
        // Input the total number of targets that need to be achieved
        System.out.println("Enter the total number of targets that needs to be achieved:");
        int targetCount = scanner.nextInt();
        
        for (int i = 0; i < targetCount; i++) {
            // Input the value of each target
            System.out.println("Enter the value of target:");
            int target = scanner.nextInt();
            
            int transactionsNeeded = 0;
            int runningTotal = 0;
            boolean targetAchieved = false;
            
            for (int transaction : transactions) {
                runningTotal += transaction;
                transactionsNeeded++;
                if (runningTotal >= target) {
                    targetAchieved = true;
                    break;
                }
            }
            
            if (targetAchieved) {
                System.out.println("Target achieved after " + transactionsNeeded + " transactions.");
            } else {
                System.out.println("Given target is not achieved.");
            }
        }
        
        scanner.close();
    }
}
