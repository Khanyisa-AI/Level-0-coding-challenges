
function triangleArea(side1,side2,side3){
    const semiParameter = (side1+side2+side3)/2;
    const area = (semiParameter*(semiParameter-side1)*(semiParameter-side2)*(semiParameter-side3))**(0.5);
    return area;
}
