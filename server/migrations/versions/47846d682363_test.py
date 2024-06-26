"""test

Revision ID: 47846d682363
Revises: b9fc39fb9836
Create Date: 2024-06-12 13:56:26.884790

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47846d682363'
down_revision = 'b9fc39fb9836'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('routinetemplates', schema=None) as batch_op:
        batch_op.add_column(sa.Column('routine_name', sa.String(), nullable=False))
        batch_op.alter_column('total_timer_length',
               existing_type=sa.TEXT(),
               type_=sa.Integer(),
               existing_nullable=True)
        batch_op.drop_column('title')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('routinetemplates', schema=None) as batch_op:
        batch_op.add_column(sa.Column('title', sa.VARCHAR(), nullable=False))
        batch_op.alter_column('total_timer_length',
               existing_type=sa.Integer(),
               type_=sa.TEXT(),
               existing_nullable=True)
        batch_op.drop_column('routine_name')

    # ### end Alembic commands ###
