import java.util.*;
public class q1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        sc.nextLine(); 
        List<List<Integer>> list = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            String[] str = sc.nextLine().split("->");
            List<Integer> l = new ArrayList<>();
            for (String s : str) {
                l.add(Integer.parseInt(s));
            }
            list.add(l);
        }
        List<Integer> res = merge(list);
        for (int i = 0; i < res.size(); i++) {
            System.out.print(res.get(i));
            if (i != res.size()- 1){
                System.out.print("->");
            }
        }
        System.out.println();
    }
    public static List<Integer> merge(List<List<Integer>> list) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        int k = list.size();
        int[] index = new int[k];
        for (int i = 0; i < k; i++) {
            if (list.get(i).size() > 0) {
                pq.offer(new int[]{list.get(i).get(0), i});
            }
        }
        List<Integer> res = new ArrayList<>();
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int val = curr[0];
            int ind = curr[1];
            res.add(val);
            index[ind]++;
            if (index[ind] < list.get(ind).size()) {
                pq.offer(new int[]{list.get(ind).get(index[ind]), ind});
            }
        }
        return res;
    }

    // public static List<Integer> merge(List<Integer> l1, List<Integer> l2) {
    //     List<Integer> res = new ArrayList<>();
    //     int i = 0, j = 0;
    //     while (i < l1.size() && j < l2.size()) {
    //         if (l1.get(i) <= l2.get(j)) {
    //             res.add(l1.get(i));
    //             i++;
    //         } else {
    //             res.add(l2.get(j));
    //             j++;
    //         }
    //     }
    //     while (i < l1.size()){
    //         res.add(l1.get(i));
    //         i++;
    //     }
    //     while (j < l2.size()){
    //         res.add(l2.get(j));
    //         j++;
    //     }
    //     return res;
    // }
}
