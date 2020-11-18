import { useEffect, useState } from "react";

export const useDB = database => {
    const [db, setdb] = useState(null);

    /**
      get data from firebase db
     */ 
    useEffect(() => {
        const dbRef = database.ref('goods');
        dbRef.on('value', snapshot => {
            setdb(snapshot.val());
        })
        console.log(database);
    }, [database]);

    return db;
}