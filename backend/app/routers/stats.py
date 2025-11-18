from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models import Task


router = APIRouter(prefix="/stats", tags=["Statistics"])


@router.get("/")
def get_task_stats(db: Session = Depends(get_db)):
    """
    Returns counts of tasks grouped by status.
    """
    stats = (
        db.query(Task.status, func.count(Task.id))
        .group_by(Task.status)
        .all()
    )

    # Convert list of tuples to dictionary
    result = {status: count for status, count in stats}

    # Ensure all statuses are present even if count=0
    all_statuses = ["pending", "in_progress", "completed"]
    for status in all_statuses:
        result.setdefault(status, 0)

    return result
