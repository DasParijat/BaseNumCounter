# Base Number Counter - Python Version

"""
Examples:
-base 1: 0 00 000 0000 00000
-base 2: 0 1 10 11 100 
-base 3: 0 1 2 10 11 
"""

class base_num_counter():
    
    def set_base_num(base):
        if base < 1:
           base = 1
        return base

    def decimal_to_binary(bn, num):
        bn_output = ''
        if (bn > 1):
            # handles a base num NOT 1
            while num > 0:
                bn_output = str(num % bn) + bn_output
                num = num // bn
        else:
            # handles a base num OF 1
            for i in range(num):
                bn_output += '0'

        return bn_output

    def count(base, count_min, count_max):
        cur_num : int
        for i in range(count_max - count_min):
            cur_num = i+(count_min + 1)
            print(f"{cur_num} = {base_num_counter.decimal_to_binary(base, cur_num)}")

def main():
    bnc = base_num_counter
    base_num = bnc.set_base_num(int(input("Enter base number: ")))

    count_min = int(input("Min number: ")) - 1
    count_max = int(input("How much count: "))

    bnc.count(base_num, count_min, count_max)
    

main()