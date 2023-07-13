import React from "react";

const Preparation = () => { 
    const preparation = [
        {
         "tag": "p",
         "children": [
          "1. In small saucepan, combine gelatine, sugar, and salt; mix well."
         ]
        },
        {
         "tag": "p",
         "children": [
          "2. Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat."
         ]
        },
        {
         "tag": "p",
         "children": [
          "3. Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white."
         ]
        },
        {
         "tag": "p",
         "children": [
          "3. Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white."
         ]
        },
        {
         "tag": "p",
         "children": [
          "4. Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined."
         ]
        },
        {
         "tag": "p",
         "children": [
          "5. Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm."
         ]
        },
        {
         "tag": "p",
         "children": [
          "6. To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve."
         ]
        },
        {
         "tag": "p",
         "children": [
          "Makes 8 servings."
         ]
        }
       ]

    return (
        <ol>
         {
            preparation.map((step, index) => {
                let Tag = step.tag
                return (
                    <li key={step.index}>{step.children}</li>
                )
            })
         }
        </ol>
    )
}
export default Preparation