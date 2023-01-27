// public, private, protected

/*
public -> 제한없음, 누구나 access 가능
private -> 특정 class 안에서만 access 가능
protected -> 특정 class 안에서 access 가능, 상속받은 class 안에서 access 가능
*/

class Base {
  first = '';
  public second = '';
  protected third = '';
  private fourth = '';

  baseFunction() {
    this.fourth;
  }
}

class Inherited extends Base {
  myFunction() {
    this.first;
    this.second;
    this.third;
    // this.fourth;
  }
}

const inherided = new Inherited();

inherided.first;
inherided.second;
// inherided.third;
// inherided.fourth;
