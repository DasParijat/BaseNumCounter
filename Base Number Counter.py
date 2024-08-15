# Base Number Counter
# This script can't handle base number of 1, unlike the JS script

class base_num_counter():
    
    def set_base_num(base):
        if base < 1:
           base = 1
        return base

    def decimal_to_binary(bn, num):
        bn_output = ''
        while num > 0:
            bn_output = str(num % bn) + bn_output
            num = num // bn

        return bn_output

    def count(base, count_min, count_max):
        cur_num : int
        for i in range(count_max - count_min):
            cur_num = i+(count_min + 1)
            print(f"{cur_num} = {base_num_counter.decimal_to_binary(base, cur_num)}")

# base 1: 0 00 000 0000
# base 2: 0 1 10 11 100 101 110 111
# base 3: 0 1 2 10 11 12 20 21 22 100 101 102 110 111 112 120 121 122 200

def main():
    bnc = base_num_counter
    base_num = bnc.set_base_num(int(input("Enter base number: ")))

    count_min = int(input("Min number: ")) - 1
    count_max = int(input("How much count: "))

    bnc.count(base_num, count_min, count_max)
    

main()