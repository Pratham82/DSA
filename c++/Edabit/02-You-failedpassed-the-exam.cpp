#include <string>
using namespace std;
string grade_percentage(string user_score, string pass_score) {
	string s="";
	if (stoi(user_score.substr(0,2)) < stoi(pass_score.substr(0,2))){
		s=s+"FAILED";
	}

  if (stoi(user_score.substr(0,2)) >= stoi(pass_score.substr(0,2))){
		s=s+"PASSED";
	}
	s = "You " + s + " " + "the Exam";
	return s;
}
