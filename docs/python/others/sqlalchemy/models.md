# Models

<https://docs.sqlalchemy.org/en/14/orm/quickstart.html>

Here, we define module-level constructs that will form the structures which we will be querying from the database. This structure, known as a Declarative Mapping, defines at once both a Python object model, as well as database metadata that describes real SQL tables that exist, or will exist, in a particular database

```python
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = "user_account"
    id = Column(Integer, primary_key=True)
    name = Column(String(30))
    fullname = Column(String)
    addresses = relationship(
        "Address", back_populates="user", cascade="all, delete-orphan"
    )

    def __repr__(self):
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

class Address(Base):
    __tablename__ = "address"
    id = Column(Integer, primary_key=True)
    email_address = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("user_account.id"), nullable=False)

    user = relationship("User", back_populates="addresses")

    def __repr__(self):
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"
```

Above, the declarative mapping makes use of [Column](https://docs.sqlalchemy.org/en/14/core/metadata.html#sqlalchemy.schema.Column) objects to define the basic units of data storage that will be in the database. The [relationship()](https://docs.sqlalchemy.org/en/14/orm/relationship_api.html#sqlalchemy.orm.relationship) construct defines linkages between two [mapped](https://docs.sqlalchemy.org/en/14/glossary.html#term-mapped) classes, UserandAddressabove.

The schema contains necessary elements such as primary key constraints set up by the [Column.primary_key](https://docs.sqlalchemy.org/en/14/core/metadata.html#sqlalchemy.schema.Column.params.primary_key) parameter, a [foreign key constraint](https://docs.sqlalchemy.org/en/14/glossary.html#term-foreign-key-constraint) configured using [ForeignKey](https://docs.sqlalchemy.org/en/14/core/constraints.html#sqlalchemy.schema.ForeignKey)(which is used by [relationship()](https://docs.sqlalchemy.org/en/14/orm/relationship_api.html#sqlalchemy.orm.relationship) as well), and datatypes for columns including [Integer](https://docs.sqlalchemy.org/en/14/core/type_basics.html#sqlalchemy.types.Integer) and [String](https://docs.sqlalchemy.org/en/14/core/type_basics.html#sqlalchemy.types.String).
