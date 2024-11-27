import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { Card } from "primereact/card";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Test } from "../../../store/reducers/tests/types";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

const UserHomePage = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const { loadTests } = useActions();
    const { list } = useTypedSelector((store) => store.testReducer);

    const loadListHanlder = async () => {
        await loadTests(page.toString(), pageSize.toString());
    };

    const onPageChange = (event: PaginatorPageChangeEvent) => {        
        setPage(event.page + 1);
        setPageSize(event.rows);
    };

    useEffect(() => {
        loadListHanlder();
    }, [page, pageSize]);

    return (
        <div>
            <div className="grid">
                {list != null ? (
                    list.tests.map((test: Test) => (
                        <div className="col-4" key={test.id}>
                            <Card
                                title={test.title}
                                style={{
                                    backgroundColor: "#2E3856",
                                    color: "white",
                                }}
                            >
                                <p className="m-0">{test.description}</p>
                            </Card>
                        </div>
                    ))
                ) : (
                    <h1>Тестів немає</h1>
                )}
            </div>
            <div>
                <Paginator
                    style={{ backgroundColor: "#0A092D" }}
                    first={(page - 1) * pageSize}
                    rows={pageSize}
                    totalRecords={list === null ? 0 : list.totalSize}
                    rowsPerPageOptions={[1, 3, 5]}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export default UserHomePage;
