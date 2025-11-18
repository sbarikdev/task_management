from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum




class PriorityEnum(str, Enum):
    high = "high"
    medium = "medium"
    low = "low"


class StatusEnum(str, Enum):
    pending = "pending"
    in_progress = "in_progress"
    completed = "completed"


class CategoryBase(BaseModel):
    name: str = Field(..., max_length=50)
    color: Optional[str] = Field(None, max_length=7)



class CategoryCreate(CategoryBase):
    pass


class Category(CategoryBase):
    id: int


class Config:
    orm_mode = True



class TaskBase(BaseModel):
    title: str = Field(..., max_length=200)
    description: Optional[str] = None
    priority: Optional[PriorityEnum] = PriorityEnum.medium
    status: Optional[StatusEnum] = StatusEnum.pending
    due_date: Optional[datetime] = None
    category_id: Optional[int] = None




class TaskCreate(TaskBase):
    pass



class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=200)
    description: Optional[str] = None
    priority: Optional[PriorityEnum] = None
    status: Optional[StatusEnum] = None
    due_date: Optional[datetime] = None
    category_id: Optional[int] = None



class Task(TaskBase):
    id: int
    created_at: datetime
    updated_at: datetime
    category: Optional[Category] = None


class Config:
    orm_mode = True