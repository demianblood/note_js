// export default function Post({item, fnFather}) {
//
//     return (
//         <div>
//             {item.id}-{item.name}-
//             <button onClick={() => {
//                 return fnFather(item.id);
//             }
//             }>click me
//             </button>
//         </div>
//
//     );
//
// }


export default function Post({item,}) {

    return (
        <div>
            {item.id}-{item.name}
        </div>
    );


}