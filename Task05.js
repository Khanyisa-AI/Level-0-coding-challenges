
function triangleArea(side1,side2,side3){
    let semiParameter = (side1+side2+side3)/2;
    let area = (semiParameter*(semiParameter-side1)*(semiParameter-side2)*(semiParameter-side3))**(0.5);
    return area;
}
