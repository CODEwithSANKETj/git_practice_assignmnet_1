n = 5
flag = true
for(i=2;i<n;i++){
    if(n%i==0){
	flag = false
	break;
   }
} 
}
}
(flag)?console.log('no is prime') : console.log('no is not a prime')