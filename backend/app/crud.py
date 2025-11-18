from sqlalchemy.orm import Session
from sqlalchemy import or_, func
from . import models, schemas
from typing import List, Optional
from datetime import datetime


# Categories

def get_category(db: Session, category_id: int):
    return db.query(models.Category).filter(models.Category.id == category_id).first()


def get_category_by_name(db: Session, name: str):
    return db.query(models.Category).filter(func.lower(models.Category.name) == name.lower()).first()


def create_category(db: Session, category: schemas.CategoryCreate):
    db_cat = models.Category(name=category.name.strip(), color=category.color)
    db.add(db_cat)
    db.commit()
    db.refresh(db_cat)
    return db_cat


def delete_category(db: Session, category_id: int):
    cat = get_category(db, category_id)
    if not cat:
        return None
    db.delete(cat)
    db.commit()
    return cat

# Tasks

def get_task(db: Session, task_id: int):
    return db.query(models.Task).filter(models.Task.id == task_id).first()


def list_tasks(
db: Session,
skip: int = 0,
limit: int = 100,
status: Optional[str] = None,
priority: Optional[str] = None,
category_id: Optional[int] = None,
search: Optional[str] = None,
):
    q = db.query(models.Task)
    if status:
        q = q.filter(models.Task.status == status)
    if priority:
        q = q.filter(models.Task.priority == priority)
    if category_id:
        q = q.filter(models.Task.category_id == category_id)
    if search:
        like = f"%{search}%"
    q = q.filter(or_(models.Task.title.ilike(like), models.Task.description.ilike(like)))
    return q.order_by(models.Task.due_date.is_(None), models.Task.due_date).offset(skip).limit(limit).all()


def create_task(db: Session, task: schemas.TaskCreate):
    db_task = models.Task(
    title=task.title.strip(),
    description=task.description,
    priority=task.priority,
    status=task.status,
    due_date=task.due_date,
    category_id=task.category_id,
    )
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def update_task(db: Session, task_id: int, task_in: schemas.TaskUpdate):
    db_task = get_task(db, task_id)
    if not db_task:
        return None
    for field, value in task_in.dict(exclude_unset=True).items():
        setattr(db_task, field, value)
    db.commit()
    db.refresh(db_task)
    return db_task


def delete_task(db: Session, task_id: int):
    db_task = get_task(db, task_id)
    if not db_task:
        return None
    db.delete(db_task)
    db.commit()
    return db_task


def get_stats(db: Session):
    total_pending = db.query(func.count(models.Task.id)).filter(models.Task.status == models.StatusEnum.pending).scalar()
    total_in_progress = db.query(func.count(models.Task.id)).filter(models.Task.status == models.StatusEnum.in_progress).scalar()
    total_completed = db.query(func.count(models.Task.id)).filter(models.Task.status == models.StatusEnum.completed).scalar()
    return {
    "pending": total_pending,
    "in_progress": total_in_progress,
    "completed": total_completed,
    }