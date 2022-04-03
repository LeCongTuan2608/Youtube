#include <stdio.h>
#include <conio.h>
int B[]={0,0,0,0,0}, n=5, OK=1, count=0;
void Result(void){
	printf("\n Ket qua buoc %3d:",++count);
	for (int i=0; i<n; i++) printf("%3d",B[i]);
}
void Function1(void){
	int i;
	for( i=n-1; i>=0 && B[i]; i--)
		B[i] =0;
	if(i>=0) B[i]=1;
	else OK=0;
}
void main(void){
	do {
		Result();
		Function1();
	} while(OK);
}