import java.util.Stack;

public class BalancedBrackets {

   public static void main(String[] args) {
       System.out.println(isBalanced("( [ [ { } ] ] )"));
       System.out.println(isBalanced("( [ [ { } ] ] ) )"));
   }

   public static boolean isBalanced(String s) {
       Stack<Character> stack = new Stack<>();

       for (int i = 0; i < s.length(); i++) {
           char c = s.charAt(i);

           if (c == '(' || c == '{' || c == '[') {
               stack.push(c);
           } else if (c == ')' || c == '}' || c == ']') {
               if (stack.isEmpty()) {
                  return false;
               }

               char topElement = stack.pop();

               if ((c == ')' && topElement != '(') || (c == '}' && topElement != '{') || (c == ']' && topElement != '[')) {
                  return false;
               }
           }
       }

       return stack.isEmpty();
   }
}
