type Members = 'a' | 'b' | 'c';

type MemberKeyed = { 
  [key in Members]: number
}
