// loss functions:
function mae(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += abs(y - yHat);
    }
    ans = sum/n;
    return ans;
}
function bce(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum+= y*log(yHat)+(1-y)*log(1-yHat);
    }
    ans = -sum/n;
    return ans;
}
function lcl(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n;  i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += log(cosh(yHat - y));
    }
    ans = sum/n;
    return ans;
}
function mbe(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n;  i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += (y - yHat);
    }
    ans = sum/n;
    return ans;
}
//New experimental function: Mean absolute exponential loss
function mael(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n;  i++) {
        let y = target[i]
        let yHat = predictions[i];
        let x = (y - yHat);

        //Mean absolute exponential function
        let top = -x*(exp(-x)-1);
        let down = (exp(-x)+1);
        sum += top/down;
    }
    ans = sum/n;
    return ans;
}
function rmse(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(y - yHat,2);
    }
    ans = sqrt(sum/n);
    return ans;
}
function mce(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(abs(y - yHat),3);
    }
    ans = sum/n;
    return ans;
}
function mse(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n; i++) {
        let y = target[i]
        let yHat = predictions[i];
        sum += pow(y - yHat,2);
    }
    ans = sum/n;
    return ans;
}
