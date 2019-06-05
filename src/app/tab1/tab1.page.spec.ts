import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Tab1Page } from "./tab1.page";
import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { ExpectedConditions } from "protractor";

describe("Tab1Page", () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test TypeScript", () => {
    let data = component.testTypeScript();

    console.log(data);
  });

  it("Interfaces", () => {
    interface User {
      name: string;
      email: string;
      age: number;
    }
    function processUser(user: User) {
      return user.name;
    }

    const result = processUser({
      name: "Silvio",
      email: "silvio@gmail.com",
      age: 35
    });
    console.log("expect user.name = Silvio");
    expect(result).toEqual("Silvio");
  });

  it("Using ellipses, collect remaining unmatched arguments", () => {
    function format(...values: string[]): string {
      return values.join(",");
    }
    let result = format("a", "b", "c");
    console.log("result: ", result);
    expect(result).toEqual("a,b,c");
  });

  it("Function parameters fixed, optional and optional with value", () => {
    function addOptionalParameter(p1: number, p2: number, p3?: number) {
      let result = p1 + p2;
      console.log("p1 + p2");
      if (p3) result += p3;
      console.log("p3: ", p3);
      return result;
    }
    const retorno1 = addOptionalParameter(1, 2);
    console.log("retorno1: ", retorno1);
    expect(retorno1).toEqual(3);
    const retorno2 = addOptionalParameter(1, 2, 3);
    console.log("retorno2: ", retorno2);
    expect(retorno2).toEqual(6);

    function delay(func: () => void, timeout = 1000) {
      setTimeout(func, timeout);
    }
    delay(() => console.log("Hello"));
    delay(() => console.log("Hello"), 3000);
  });

  // it("Use function types in high-order functions", () => {
  //   function forEach(array: any[], iterator: (any) => void) {
  //     for (let item in array) {
  //       iterator(item);
  //     }
  //   }
  //   // forEach([11, 22, 33], item => console.log(item));
  //   const result = [];
  //   forEach([4, 5, 6], item => {
  //     result.push(item);
  //     console.log(item);
  //   });
  //   console.log("result: ", result);
  //   expect(result).toEqual([4, 5, 6]);
  // });

  it("Copy array items", () => {
    const items = ["item1", "item2", "item3"];
    const copy = [];

    items.forEach(function(item) {
      copy.push(item);
    });
    console.log(copy);
    expect(copy).toEqual(["item1", "item2", "item3"]);
  });

  it("Declaring fuction types", () => {
    console.log("on the variable declaration");
    let size: (str: string) => number = function(str) {
      return str.length;
    };
    let sizeOfString = size("Tamanho da frase");
    console.log("sizeOfString", sizeOfString);
    expect(sizeOfString).toEqual(16);

    console.log("on the function declaration side");
    let multiply = function(v1: number, v2: number): number {
      return v1 * v2;
    };
    let result = multiply(2, 2);
    console.log("Mutiply 2, 2: ", result);
    expect(result).toEqual(4);
  });

  it("Union Type", () => {
    let stringOrNumber: string | number = "Hello World";
    console.log("stringOrNumber: ", stringOrNumber);
    expect(stringOrNumber).toEqual("Hello World");
    stringOrNumber = 3;
    expect(stringOrNumber).toEqual(3);
    stringOrNumber = "Test";
    expect(stringOrNumber).toBe("Test");

    type TrafficColor = "Red" | "Greean" | "Yellow";
    let color: TrafficColor = "Red";
    console.log("color: ", color);
    expect(color).toEqual("Red");
  });

  it("Never Special Type", () => {
    //let data = component.neverHappens();
    console.log("Never Special Type");
  });

  it("Void Type", () => {
    let data = component.sayHello();
    console.log("data:", data);
    expect(data).toEqual(undefined);
  });

  it("Type Any, bypass compiling check on integragion with javascript", () => {
    let val: any = "Hello World";
    expect(val).toEqual("Hello World");
    console.log("val: ", val);

    val = 100;
    console.log("val: ", 100);
    expect(val).toEqual(100);

    val = true;
    console.log("val: ", val);
    expect(val).toEqual(true);
  });

  it("Enum Type", () => {
    enum Status {
      Started,
      Stopped,
      Error
    }
    let status: Status = Status.Stopped;
    console.log("Status Stopped: ", status);
    expect(status).toEqual(1);

    enum Permission {
      Read = 1,
      Write = 2,
      Execute = 4
    }
    let permission = Permission.Read | Permission.Write;
    console.log("permission: ", permission);
    expect(permission).toEqual(3);

    {
      console.log("enum textual format:");
      let status: string = Status[1];
      console.log("enum textual format for 1 Stopped: ", Status[1]);
      expect(status).toEqual("Stopped");
    }
  });

  it("Tuple Type", () => {
    let points: [number, number, string] = [10, 10, "p1"];
    console.log("points: ", points);
    expect(points).toEqual([10, 10, "p1"]);
  });

  it("Array Type", () => {
    let strings: string[] = ["a", "b", "c"];
    console.log("strings: ", strings);
    expect(strings).toEqual(["a", "b", "c"]);

    let numbers: number[] = [1, 2, 3];
    console.log("numbers: ", numbers);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("Test TypeScript", () => {
    var port = 8080;
    port = "9090";

    console.log(port);
  });

  it("Null and Undefined - Types", () => {
    let v1: null = null;
    let v2: undefined = undefined;

    console.log("v1 null:", v1);
    console.log("v2 undefined: ", undefined);
  });

  it("String Type", () => {
    let text: string = "Helo World";
    console.log("text string: ", text);
    console.log("ES6 template literals");
    let a: number = 1;
    let b: number = 2;
    let result: string = `${a} + ${b} = ${a + b}`;
    console.log("ES6 template literals: `${a} + ${b} = ${a + b}`");
    expect(result).toEqual("1 + 2 = 3");
  });

  it("Number - Basic Type", () => {
    let n1: number = 20; //decimal
    console.log("20 decimal n1: ", n1);
    let n2: number = 0x14; // hexadecimal
    console.log("0x14 hexadecimal n2: ", n2);
    let n3: number = 0b10100; // binary
    console.log("0b10100 binary n3: ", n3);
  });

  it("Boolean  - Basic Type", () => {
    let isActive: boolean = false;
    console.log("isActive: ", isActive);
    isActive = true;
    console.log("isActive: ", isActive);
  });
});
