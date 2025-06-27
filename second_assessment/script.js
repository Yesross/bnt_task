
        // javascript questions

        // 1.Function to find the most repeated characters

        function Repeated(str) {
            let max = '';
            let maxCount = 0;
            for (let char of str) {
                let count = str.split(char).length - 1;
                if (count > maxCount) {
                    maxCount = count;
                    max = char;
                }
            }
            return max;
        }

        console.log(Repeated("aabbbcc"));


        // 2.Function to find unique elements in two arrays
        function Unique(arr1, arr2) {
            return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
        }

        let a = [1, 2, 3];
        let b = [2, 4, 5];

        let unique = Unique(a, b);
        console.log(unique); // Output: [1, 3, 4, 5]




        //3. Function to find the longest word in a sentence
        function Long(sent) {
            let words = sent.split(' ');
            let longest = '';
            for (let word of words) {
                if (word.length > longest.length) {
                    longest = word;
                }
            }
            return longest;
        }

        console.log(Long("JavaScript is powerful")); // Output: "JavaScript"



        // 4. Chainable function for arithmetic operations
        function chain(value) {
            return {
                add(n) {
                    value = value + n;
                    return this;
                },
                subtract(n) {
                    value = value - n;
                    return this;
                },
                result() {
                    return value;
                }
            };
        }

        console.log(chain(5).add(2).subtract(1).result()); // Output: 6


        
        // 5. Explain hoisting in JavaScript with a practical example.
        console.log(eg); // Output: undefined
        var eg = 5;

        summa(); // Output: "Hello"
        function summa() {
            console.log("Hello");
        }




    