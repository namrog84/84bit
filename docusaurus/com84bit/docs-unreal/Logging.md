---
sidebar_position: 4
---



# Logging



## Format

| Format Specifier	| Type|
|-|-|
|%c |	Character
|%d|	Signed integer
|%e| or %E	Scientific notation of floats
|%f|	Float values
|%g| or %G	Similar as %e or %E
|%hi|	Signed integer (short)
|%hu|	Unsigned Integer (short)
|%i|	Unsigned integer
|%l| or %ld or %li	Long
|%lf|	Double
|%Lf|	Long double
|%lu|	Unsigned int or unsigned long
|%lli or %lld|	Long long
|%llu|	Unsigned long long
|%o|	Octal representation
|%p|	Pointer
|%s|	String
|%u|	Unsigned int
|%x or %X|	Hexadecimal representation
|%n|	Prints nothing
|%%	| Prints % character



## Examples

```cpp
int intValue = 3;
float floatValue = 3.14;
double doubleValue = 3.14159265359;
UE_LOG(LogTemp, Display, TEXT("SomeFormat %s"), *GetName());
UE_LOG(LogTemp, Warning, TEXT("SomeFormat %d %20.1f %f"), intValue, floatValue, doubleValue);
UE_LOG(LogTemp, Warning, TEXT("SomeFormat %f %-20.1f %lf"), intValue, floatValue, doubleValue);
```


## Blueprint

`PrintString`, `PrintText`

InString, PrintToScreen, PrintToLog, TextColor, Duration, Key

:::tip Example

Key is if you want to override an existing value. For example: if you were printing a status like FPS or ping, you likely don't care about past versions, so only ever show the most current one.

:::


## OtherThing











