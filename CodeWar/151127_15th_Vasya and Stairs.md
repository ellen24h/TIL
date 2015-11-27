### Problem
Description:

Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

    ipToInt32("128.32.10.1") => 2149583361

### My solution
    function ipToInt32(ip){
      ip = ip.split('.');
      for (var i = 0; i < ip.length; i++) {
        ip[i] = parseInt(ip[i], 10).toString(2);
        while(ip[i].length < 8) {
          ip[i] = '0' + ip[i];
        }
      }
      ip = ip.join('');
      console.log(parseInt(ip, 2).toString(10));
      return parseInt(parseInt(ip, 2).toString(10)); // 다시 한번 parseInt를 하는 부분에서 시간이 좀 걸렸다
    }

### Impressive Solutions
    # 1
    function ipToInt32(ip){
       return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
    }

    # 2
    function ipToInt32(ip){
        ip = ip.split('.');
        return  ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0))>>>0;
    }

    # 3
    function ipToInt32(ip) {
      return parseInt(ip.split('.').map(function(v) {
        var bin = parseInt(v).toString(2);
        return new Array(9 - bin.length).join('0') + bin;
      }).join(''), 2);
    }

### What I Learned
    map이나 reduce를 쓰면 for문을 쓰지 않아도 되니 효율이 증가할 것 같다
    사용을 익숙하게 해야겠다.
    정규표현식과 비트연산자 등도 공부해보면 좋겠다.